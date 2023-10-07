import { deletePost, getPost, updatePost } from "../../services";
import axios from "axios";
import {
  ActionFunction,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FormAdmin } from "../../Widget";
import { Button } from "../../Components/UI";
import { IPost } from "../../interfaces";
import { catchUnauthorizedError } from "../../utils/router";

const EditPost = () => {
  const params = useParams() as { id: string };
  const post = useLoaderData() as IPost;
  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    try {
      await deletePost(params.id);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
      } else throw error;
    }
  };

  return (
    <>
      <FormAdmin title={"Edit Post"} defaultValues={post}>
        <Button type="button" onClick={handleDeleteClick}>
          Delete
        </Button>
      </FormAdmin>
    </>
  );
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
