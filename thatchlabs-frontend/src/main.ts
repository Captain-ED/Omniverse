import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'
import 'tw-elements';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import Swal, { SweetAlertOptions } from "sweetalert2";
//import "~/node_modules/@sweetalert2/theme-bootstrap-4";
const options = {
	confirmButtonColor: '#581c87',
	cancelButtonColor: '#ff7674'
}

const $swal = {
	install: (Vue: { provide: (arg0: string, arg1: typeof Swal) => void; }, options: SweetAlertOptions<any, any>) => {
		Vue.provide("$swal", Swal.mixin(options));
	}
}

// import InfiniteLoading from "v3-infinite-loading";
// import "v3-infinite-loading/lib/style.css";

// import LoaderElement from '@/components/LoaderElement.vue'
// import AccountLayout from '@/components/AccountLayout.vue'
// import TransactionItem from '@/components/TransactionItem.vue'
// import ErrorIcon from '@/components/ErrorIcon.vue'
// import TransactionIcon from '@/components/TransactionIcon.vue'
// import BankListItem from '@/components/BankListItem.vue'

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
//   .component('loader-element', LoaderElement)
//   .component('AccountLayout',AccountLayout)
//   .component('TransactionItem',TransactionItem)
//   .component('ErrorIcon',ErrorIcon)
//   .component('TransactionIcon',TransactionIcon)
//   .component('InfiniteLoading',InfiniteLoading)
//   .component('BankListItem',BankListItem)
  .use($swal, options)
  .use(router);


router.isReady().then(() => {
  app.mount('#app');
});

