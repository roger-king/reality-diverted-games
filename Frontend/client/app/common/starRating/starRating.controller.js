class StarRatingController {
    constructor() {
        'ngInject';
        let vm = this;

        vm.rate = 4;
        vm.starRater = [
            {
                rated: false,
                icon: "star_border"
            },
            {
                rated: false,
                icon: "star_border"
            },
            {
                rated: false,
                icon: "star_border"
            },
            {
                rated: false,
                icon: "star_border"
            },
            {
                rated: false,
                icon: "star_border"
            }
        ];
        //TODO: get the rating from parent
        vm.fillIn = (rate) => {
            let remainder = rate;

            for(let i = 0; i < rate; i++){
                vm.starRater[i].rated = true;
                vm.starRater[i].icon = "star";
                if(remainder < 1 && remainder % 1 !== 0){
                    vm.starRater[i].icon = "star_half";
                }
                remainder -= i;
            }
        }
    }
}

export default StarRatingController;
