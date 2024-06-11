// Import from "@inrupt/solid-client-authn-browser"
import {
  login,
  handleIncomingRedirect,
  getDefaultSession,
  fetch
} from "@inrupt/solid-client-authn-browser";

// Import from "@inrupt/solid-client"
import {
  addUrl,
  addStringNoLocale,
  createSolidDataset,
  createThing,
  getPodUrlAll,
  getSolidDataset,
  getThingAll,
  getStringNoLocale,
  removeThing,
  saveSolidDatasetAt,
  setThing
} from "@inrupt/solid-client";

import { SCHEMA_INRUPT, RDF, AS } from "@inrupt/vocab-common-rdf";

const buttonLogin = document.querySelector("#btnLogin");
const buttonUpload = document.querySelector("#btnUpload");
const buttonShare = document.querySelector("#btnShare");

buttonLogin.setAttribute("disabled", "disabled");
buttonUpload.setAttribute("disabled", "disabled");
buttonShare.setAttribute("disabled", "disabled");


// Start login process

function loginToPod() {

  const SELECTED_IDP = prompt("Please enter your pod provider")

  return login({
    oidcIssuer: SELECTED_IDP
    clientName: "Getting started app"
  })
}


// 1b. Login Redirect. Call handleIncomingRedirect() function.
// When redirected after login, finish the process by retrieving session information.
async function handleRedirectAfterLogin() {
  await handleIncomingRedirect(); // no-op if not part of login redirect

  const session = getDefaultSession();
}

// The example has the login redirect back to the root page.
// The page calls this method, which, in turn, calls handleIncomingRedirect.
handleRedirectAfterLogin();

buttonLogin.onclick = function () {
  loginToPod();
};

buttonUpload.onclick = function () {
  uploadFile();
};

buttonShare.onclick = function () {
  shareFile();
};