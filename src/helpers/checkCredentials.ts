import compare from "tsscmp";

export default function checkCredentials(name, pass) {
  let valid = true;

  // Simple method to prevent short-circut and use timing-safe compare
  valid = compare(name, process.env.CRON_BASIC_USER) && valid;
  valid = compare(pass, process.env.CRON_BASIC_PASS) && valid;

  return valid;
}
