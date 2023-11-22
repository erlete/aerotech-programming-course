import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

mermaid.initialize({
    theme: "base",
    logLevel: "fatal",
    securityLevel: "strict",
    startOnLoad: false,
    arrowMarkerAbsolute: false,

    gitGraph: {
        showBranches: true,
        showCommitLabel: true,
        rotateCommitLabel: true,
        mainBranchName: "stable"
    },

    themeVariables: {
        git0: "#f8dfa9",
        git1: "#f5d07d",
        git2: "#f1c052",
        gitBranchLabel0: "#312e81",
        gitBranchLabel1: "#3730a3",
        gitBranchLabel2: "#4338ca",
        commitLabelColor: "#fcefd4",
        commitLabelBackground: "#1e1b4b",
        commitLabelFontSize: "10px",
        tagLabelFontSize: "10px",
        tagLabelColor: "#fcefd4",
        tagLabelBackground: "#1e1b4b",
        tagLabelBorder: "#eeb027"
    }
});

await mermaid.run({
    querySelector: ".mermaid",
    suppressErrors: true
});
