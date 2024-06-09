// import {httpClient} from '../libs/http.lib';
// import type {Method} from '../libs/http.lib';
import type {Friend} from '../redux/reducers/friend.reducer';

// TODO: define the API URL as an environment variable.
const API_URL = 'https://randomuser.me';

type FetchProps = {
  page: number;
  results: number;
};

export type FetchFriendsResponse = {
  info: Record<string, unknown>;
  results: Friend[];
};

/**
 * @func fetchFriends
 * @description Fetch friends from the API.
 *
 * @param {object} params         An object with the required properties to perform the request.
 * @param {number} params.page    The page to perform the request.
 * @param {number} params.results The number of results to fetch.
 *
 * @returns {Promise<FetchFriendsResponse>} An object with the respective requested data as a Promise.
 */
export const fetchFriends = async ({
  page,
  results,
}: FetchProps): Promise<FetchFriendsResponse> => {
  try {
    // TODO: Use the params property once the HTTP client has been updated to use axios.
    // const method: Method = 'GET';
    // const queryParams = {
    //   page: page.toString(),
    //   results: results.toString(),
    // };
    // const options = {
    //   url: `${API_URL}/api/?page=${page}&results=${results}`,
    //   method,
    //   queryParams,
    // };

    // const response = await httpClient(options);
    // return response;

    // TODO: Remove the fetch API and use the httpClient wrapper once it has been updated.
    const response = await fetch(
      `${API_URL}/api/?page=${page}&results=${results}`,
    );
    const data = await response.json();
    return data;
  } catch (friendsError) {
    console.error(
      'Something went wrong trying to fetch the friends list.',
      friendsError,
    );
    throw friendsError;
  }
};
