import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const name = "Rharamys"
    const data = {
        age: 32,
        job: "Software Engineer",
    }

    return (
        <div>
            <h1>
                Hello, {name}. How are you?
            </h1>
            <p>I know you are a {data.job}</p>
            <p>And you will be {data.age + 1} years old soon</p>
            <p>{console.log("JSX React")}</p>
            <MyComponent/>
        </div>
    )
}

export default TemplateExpressions;