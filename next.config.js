/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER, PHASE_TEST } = require("next/constants");


module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["sayfyho-memorial.s3.eu-central-1.amazonaws.com"],
      },
      env: {
        BACKEND_URL: "http://localhost:5000",
        IMAGE_DOMAIN: "https://sayfyho-memorial.s3.eu-central-1.amazonaws.com",
      },
    };
  }

  if (phase === PHASE_TEST) {
    return {
      images: {
        domains: ["sayfyho-memorial.s3.eu-central-1.amazonaws.com"],
      },
      env: {
        BACKEND_URL: "http://localhost:5000",
        IMAGE_DOMAIN: "https://sayfyho-memorial.s3.eu-central-1.amazonaws.com",
      },
    };
  }

  return {
    images: {
      domains: ["sayfyho-memorial.s3.eu-central-1.amazonaws.com"],
    },

    env: {
      BACKEND_URL: "https://sayfy-memorial-backend.herokuapp.com",
      IMAGE_DOMAIN: "https://sayfyho-memorial.s3.eu-central-1.amazonaws.com",
    },
  };
};


