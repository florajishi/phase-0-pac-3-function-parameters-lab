function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
function introductionWithLanguage(name = "User", language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name = "Jacey", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}