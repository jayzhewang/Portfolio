export const postMessage = (message, success) => {
  $.ajax({
    method: 'POST',
    data: {message},
    url: '/portfolio_contact',
    success
  });
};
