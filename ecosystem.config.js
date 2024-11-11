module.exports = {
  apps: [
    {
      name: 'hzh-home-nuxt',
      script: './server/index.mjs',
      exec_mode: "cluster",
      instances: "max",
      autorestart: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_sit: {
        NODE_ENV: 'sit',
        PORT: 3000,
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: './logs/pm2-err.log',
      out_file: './logs/pm2-out.log',
      merge_logs: false,
      log_type: 'json',
      combine_logs: false,
    },
  ],
};
