export default () => useState('globalState', () => ({
    globalToast: null as null | string,
    globalModal: null as null | string,
}))
