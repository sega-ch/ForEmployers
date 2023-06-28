//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 - token github
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: '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'
});

 await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
});