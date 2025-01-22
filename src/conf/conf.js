const conf = {
  openAIKey: String(import.meta.env.VITE_OPENAPI_KEY),
  geminiAIKey: String(import.meta.env.VITE_GEMINIAPI_KEY),
  tmdbKey: String(import.meta.env.VITE_TMDB_KEY),
};

export default conf;
