import Button from "../components/Button";

export default {
    title:"Button",
    component: Button,
}

const Template = args => <Button {...args}/> 

//export const Red = () => <Button label="Press me" backgroundColor = "red"/>
export const Red = Template.bind({});

Red.args = {
    backgroundColor:"red",
    label:"Do not press",
    size:"md"
}

export const Green = Template.bind({});

Green.args = {
    backgroundColor:"green",
    label:"Please Press",
    size:"lg"
}

export const Blue = Template.bind({});

Blue.args = {
    ...Red.args,
    backgroundColor:"lightblue",
    label:"Can Press",
}