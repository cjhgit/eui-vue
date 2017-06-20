let timeout;

export default {
    bind () {

    },
    update (el, binding) {
        el.innerHTML = new Date();
        timeout = setInterval(() => {
            this.el.innerHTML = new Date();
        });
    },
    unbind () {
        clearInterval(timeout);
    }
};