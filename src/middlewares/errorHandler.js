export const errorHandler = (error, _req, res, _next) => {
  const { status = 500, message = 'Something went wrong' } = error;
  res.status(status).json({
    status,
    message,
  });
};
