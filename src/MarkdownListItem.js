function MarkdownListItem(indentation, text, checkboxValue) {
    let api = {};

    api.indentation = indentation;
    api.text = text;
    api.checkboxValue = checkboxValue;

    function renderCheckbox(checkboxValue) {
        if ( checkboxValue === undefined ) {
            return "";
        }

        if ( typeof checkboxValue === 'boolean' ) {
            if ( checkboxValue === true )
            {
                return "[X] ";
            }
            return "[ ] ";
        }

        return "[" + checkboxValue + "] ";
    }

    api.render = () => {
        let renderedText = " ".repeat(api.indentation) + "- ";

        renderedText += renderCheckbox(api.checkboxValue);

        renderedText += text;
        
        return renderedText;
    }

    return api;
}

module.exports = MarkdownListItem;