import { client } from '../../commons/httpCommon';
import { HttpService } from './httpService';

const URL = 'testUrl';
const MOCK_DATA = ['Some test data', true, false];

describe('HttpService', () => {

  describe('get()', () => {
    it('should process a get request.', async() => {
      const getSpy = jest.spyOn(client, 'get').mockResolvedValue(Promise.resolve(MOCK_DATA));
      const result = await HttpService.get(URL, {}, MOCK_DATA);
      expect(result).toEqual(MOCK_DATA);
      expect(getSpy).toBeDefined();
    });
  });

  describe('post()', () => {
    it('should process a post request.', async () => {
      const postSpy = jest.spyOn(client, 'post').mockResolvedValue(Promise.resolve(MOCK_DATA));
      const result = await HttpService.post(URL, {}, {}, MOCK_DATA);
      expect(result).toEqual(MOCK_DATA);
      expect(postSpy).toBeDefined();
    });
  });
});
