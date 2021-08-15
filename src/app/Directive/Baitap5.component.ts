import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap5',
  template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <a class="navbar-brand" href="#">CyberSoft</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li *ngIf="!isLogin" class="nav-item">
            <a
              class="nav-link"
              href="#"
              data-toggle="modal"
              data-target="#modelId"
              >Login</a
            >
          </li>
          <li *ngIf="isLogin" class="nav-item">
            <a
              class="nav-link"
              href="#"
              data-toggle="modal"
              data-target="#modelId"
              >{{ userName }}</a
            >
          </li>
          <li *ngIf="isLogin" class="nav-item">
            <a
              class="nav-link"
              href="#"
              (click) = 'exit()'
              >Exit</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group">
                <p>UserName</p>
                <input class="form-control" [(ngModel)]="userLogin.username" />
              </div>
              <div class="form-group">
                <p>Password</p>
                <input class="form-control" [(ngModel)]="userLogin.password" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              (click)="login()"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Baitap5Component implements OnInit {
  constructor() {}

  ngOnInit() {

    if (localStorage.getItem('userLogin')) {
      this.userName = localStorage.getItem('userLogin')!;
      this.isLogin = true;
    }
  }
  isLogin: boolean = false;
  userLogin: any = {
    username: '',
    password: '',
  };
  userName: string = 'cybersoft';
  login = () => {
    if (
      this.userLogin.username === 'cybersoft' &&
      this.userLogin.password === 'cybersoft'
    ) {
      this.userName = this.userLogin.username;
      this.isLogin = true;
      localStorage.setItem('userLogin',this.userLogin.username);
    } else {
      alert('username hoặc mật khẩu sai');
    }
  };
  exit = () => {
    localStorage.clear();
    this.isLogin= false;
  }
}
