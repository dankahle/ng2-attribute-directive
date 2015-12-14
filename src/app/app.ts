import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {MyDir} from './directives/mydir'

@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MyDir]
})
class AppComponent {
   name:string = 'dank';
   colors = ['red', 'blue'];

}
bootstrap(AppComponent);
