export const postMessage = (message, success) => {
  $.ajax({
    method: 'GET',
    data: {message},
    url: '/portfolio_contact',
    success
  });
};
