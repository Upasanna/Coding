function removeTags(str) {
    if ((str===null) || (str===''))
    return false;
    else
    str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
 }
 document.write(removeTags('<html> <body><em> Python <em><body> is a programming Language'));;