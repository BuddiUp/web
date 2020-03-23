import buddiup from '../../apis/buddiup';

const HandleUpdate = (userData) => {
    const USER_TOKEN = localStorage.getItem('token');
    const CONFIG = {
        headers: {
            Authorization: `Token ${USER_TOKEN}`,
            'Content-Type': 'application/json'
        }
    };

    buddiup
        .post('/api/auth/update', userData, CONFIG)
        .then((res) => {
            console.log(res);
            // window.location.reload(true);
        })
        .catch((err) => console.log(err));
};

export default HandleUpdate;
