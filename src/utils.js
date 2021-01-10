export const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

export const loadCss = async (url) => {
    return new Promise((resolve, reject) => {
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href",  url);
        linkElement.onload = resolve;
        linkElement.onerror = reject;

        document.head.appendChild(linkElement);
    });
};