import * as Yup from "yup";

const subscribe = Yup.object().shape({
    email: Yup.string().email().required()
});

export default subscribe;