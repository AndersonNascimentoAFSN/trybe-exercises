import App from "../App";
import renderWithRedux from '../tests/helpers/';
import fetchMock from 'fetch-mock-jest';
import userEvent from "@testing-library/user-event";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/react";



describe('Página principal', () => {
  beforeEach(() => {
    global.fetch = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        "message": "https://images.dog.ceo/breeds/setter-irish/n02100877_172.jpg",
        "status": "success"
    })
    });
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  it('Testa que o botão de adicionar cachorro está presente', async () => {
    const {queryByText} = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeDefined();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'https://images.dog.ceo/breeds/brabancon/n02112706_1303.jpg' },
    });

    userEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });

  it('Testa que o botão de adicionar cachorro faz uma consulta a API, e insere uma imagem', async () => {
    const { queryByText, getByRole } = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    userEvent.click(buttonDoguinho);
    expect(global.fetch).toBeCalled();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://dog.ceo/api/breeds/image/random');

    // const loading = queryByText(/loading/i);
  
    await waitForElementToBeRemoved(() => queryByText(/loading/i));

    const img = getByRole('img', {
      name: /dog/i
    });
    expect(img).not.toBeDefined();

  });
});
