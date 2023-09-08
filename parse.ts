export const parse = (content: string): string => {
    let contentArray: string[] = content.split("\r")
    let parsed = ``
    
    for (let i = 0; i < contentArray.length; i++) {
        contentArray[i] = contentArray[i].replace(/(\r\n|\n|\r)/gm, "")
        
        if (contentArray[i].startsWith("#")) {
            let lineToArray: Array<string> = contentArray[i].split("")
            let hashtags = 0


            while (lineToArray[0] === "#") {
                hashtags++
                lineToArray.shift()
            }
            parsed += `<h${hashtags}>${contentArray[i].substring(contentArray[i].indexOf(" ") + 1)}</h${hashtags}>\n`
        } else if (contentArray[i].startsWith(">")) {
            parsed += `<blockquote style="padding: 24px 40px;margin: 0;"><p>${contentArray[i].substring(contentArray[i].indexOf(" ") + 1)}</p></blockquote>\n`
        } else if (contentArray[i].length > 0) {
            parsed += `<p>${contentArray[i]}</p>\n`
        }
    }

    return parsed
}