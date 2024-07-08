function checkValidUrl(inputText) {
    console.log("::: Running checkValidUrl :::", inputText);
    const pattern =
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    return pattern.test(inputText)
}

export { checkValidUrl };
