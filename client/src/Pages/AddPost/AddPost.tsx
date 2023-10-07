import { addPost } from "../../services";
import axios from "axios";
import { ActionFunction, redirect } from "react-router-dom";
import { FormAdmin } from "../../Widget";

const AddPost = () => {
  return <FormAdmin title="Add Post" />;
};

export const addPostAction: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries()) as {
      title: string;
      topic: string;
      content: string;
    };

    await addPost(data);

    return redirect("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data.message);
      return null;
    } else throw error;
  }
};

export default AddPost;
