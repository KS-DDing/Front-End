export const onEmailHandler = (event, Email, setEmail) => {
    event.preventDefault();
    console.log(Email);
    setEmail(Email)
}

export const onPasswordHandler = () => {
    this.setPassword(this.event.currentTarget.value)
}