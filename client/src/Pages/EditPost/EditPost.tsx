import { getPost, updatePost } from "../../services";
import {
  ActionFunction,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import { FormEditPost } from "../../Widget";

import { catchUnauthorizedError } from "../../utils/router";
import { IPost } from "../../interfaces";

const EditPost = () => {
  const post = useLoaderData() as IPost;

  return <FormEditPost defaultValues={post} />;
};

export const editPostAction: ActionFunction = async ({ request, params }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries()) as {
      title: string;
      topic: string;
      content: string;
    };

    if (!params.id) {
      alert("No id");
      return null;
    }

    await updatePost({ id: params.id, ...data });
    alert("Successfully updated");

    return null;
  } catch (error) {
    return catchUnauthorizedError(error);
  }
};

export const editPostLoader = async ({ params }: LoaderFunctionArgs<any>) => {
  try {
    if (params.id) {
      const post = await getPost(params.id);
      return post;
    }
  } catch (error) {
    return catchUnauthorizedError(error);
  }
};

export default EditPost;
