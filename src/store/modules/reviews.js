export default {
    state() {
        return {
            reviews: [
                {
                    img: 'https://blog.cognifit.com/wp-content/uploads/2020/01/man-in-red-crew-neck-sweatshirt-photography-941693-scaled-e1579374267470-480x480.jpg',
                    alt: 'Man',
                    name: 'Mike Taylor',
                    location: 'Lahore, Pakistan',
                    text: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
                    index: 1
                },
                {
                    img: 'https://1.bp.blogspot.com/-R0jM1R-egP0/W8bTqadTV2I/AAAAAAAAAQM/dj1YwCgRQec7iKucxBFIoELV700nH7ICQCLcBGAs/s1600/haircut%2Bfor%2Bmen-13.jpg',
                    alt: 'Man',
                    name: 'Chris Thomas',
                    location: 'CEO of red button',
                    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.”',
                    index: 2
                },
            ],
            activeElem: '',
            curIndex: 1,
        }
    },
    mutations: {
        /**
         * Присваетвает activeElem коллексию элементов
         * @param state
         * @param selection - {sel: document...}
         */
        setElem: function (state, selection) {
            state.activeElem = selection.sel;
        },
        updateCurIndex: function (state) {
          if (state.curIndex != state.activeElem.length) {
              state.curIndex++
          }  else state.curIndex = 1
        },
        /**
         * Меняет позицию нужного элемента в коллекции, присваивая ему класс
         * @param state
         * @param index
         */
        changePostPos: function (state, index) {
            for (let i = 0; i < state.activeElem.length; i++) {
                if (state.activeElem[i].attributes.data.value == index) {
                    state.curIndex = index; // Установка глобального индекса ****
                    state.activeElem[i].classList.add('__active');
                    state.activeElem[i].childNodes[0].classList.add('__active'); // avatar
                    state.activeElem[i].childNodes[1].classList.add('__active'); // block
                }
                else {
                    state.activeElem[i].classList.remove('__active');
                    state.activeElem[i].childNodes[0].classList.remove('__active'); // avatar
                    state.activeElem[i].childNodes[1].classList.remove('__active'); // block
                }
            }
        },
    },
    getters: {
        getReviews(state) {
            return state.reviews;
        },
        getActiveElem(state) {
            return state.activeElem;
        },
        getIndex(state) {
            return state.curIndex;
        }
    },
    actions: {},
}