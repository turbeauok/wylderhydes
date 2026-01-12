import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_eYVKPnrl1",
    client_id: "7u3fgqn801unoj8gd7fp0s6gq2",
    redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",//"https://master.d108d7anayy6gv.amplifyapp.com/dredir.html", //"https://d84l1y8p4kdic.cloudfront.net",
    response_type: "code",
    scope: "email openid phone"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "7u3fgqn801unoj8gd7fp0s6gq2";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://us-east-1eyvkpnrl1.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};
