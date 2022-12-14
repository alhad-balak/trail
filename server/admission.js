import Form from "./formSchema.js"

export const postAdmission = async (req, res) => {
    const { name, age, mobilenumber, batch } = req.body;
    Form.create({
        name,
        age,
        mobilenumber,
        batch,
    })
        .then((result) => {
            res.status(201).json({
                message: "Admission created successful!",
                form: result,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};