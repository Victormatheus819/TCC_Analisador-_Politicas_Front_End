import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';



Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            dark_blue:'#0A1931' , 
            light_blue:'#185ADB',
            lighter_blue:'#A2DBFA', 
            gold_yellow:'#FFC947',
            light_grey: '#EFEFEF',
            white: '#FFFFFF',
            swamp_green :'6AA84F',
          },
        },
      },
});
