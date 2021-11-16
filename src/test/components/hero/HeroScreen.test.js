import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/hero/HeroScreen';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));


describe('Pruebas en <HeroScreen />', () => {
    
    test('no debe de mostrar el HeroScreen si no hay un héroe en el URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('h1').text().trim() ).toBe('No Hero Page');


    })

    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);


    })
    

    test('debe de regresar a la pantalla anterior', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( mockNavigate ).toHaveBeenCalledWith(-1);

    })
    

    test('debe de mostrar el No Hero Page si no tenemos un héroe', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider12312312']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('No Hero Page');


    })


})
