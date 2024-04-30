import { useState } from "react";

const ItemAddForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        description: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        
        setFormData({
            description: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            correct: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Введите загадку:
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
            </label>
            <br/>

            <label>
                Введите в поле первый вариант ответа:
                <input type="text" name="option1" value={formData.option1} onChange={handleChange} />
            </label>
            <br/>

            <label>
                Введите в поле второй вариант ответа:
                <input type="text" name="option2" value={formData.option2} onChange={handleChange} />
            </label>
            <br/>

            <label>
                Введите в поле третий вариант ответа:
                <input type="text" name="option3" value={formData.option3} onChange={handleChange} />
            </label>
            <br/>

            <label>
                Введите в поле четвёртый вариант ответа:
                <input type="text" name="option4" value={formData.option4} onChange={handleChange} />
            </label>
            <br/>

            <label>
                Введите номер правильного ответа:
                <input type="text" name="correct" value={formData.correct} onChange={handleChange} />
            </label>
            <br/>

            <input className="button" type="submit" value={"Добавить"} />
        </form>
    );
};

export default ItemAddForm;