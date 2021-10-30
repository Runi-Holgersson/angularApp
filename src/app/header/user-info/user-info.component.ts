import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorizationService} from "../../common/services/authorization.service";
import {from, Subscription} from "rxjs";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnDestroy {
  public userName: string = "test";
  public userInfo: Subscription;

  constructor(public authorizationService: AuthorizationService) {
    this.userInfo = from(this.authorizationService.getUserInfo())
      .subscribe(data => {
        this.userName = `${data.name.first} ${data.name.last}`;
      });
  }

  ngOnDestroy() {
    this.userInfo.unsubscribe();
  }
}
