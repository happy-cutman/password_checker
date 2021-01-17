// возвращает промис на удачное заполнение формы
export const postData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${data.password} saved.`);
            resolve({ success: true });
        }, 100);
    });
};
