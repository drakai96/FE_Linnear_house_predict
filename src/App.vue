<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-12 bg-dark p-2 text-center">
          <router-link to="/" class="text-white text-decoration-none fs-4 title">MRHUNG MACHINE LEARNING CLASS</router-link>
        </div>
    </div>
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 bg-dark">
          <div class="d-flex flex-column text-white min-vh-100">
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center" id="menu">
                  <li class="divider" role="separator"></li>
                  <!--Overview-->
                  <li>
                      <a href="#keyfeatures" data-bs-toggle="collapse" class="nav-link align-middle collapsed" >
                          <i class="fa fa-star"  aria-hidden="true"></i>
                          <span class="d-none d-sm-inline"> DATA </span>
                          <i class="fa fa-chevron-up"></i>
                      </a>
                      <ul class="collapse nav flex-column submenu collapse" id="keyfeatures" data-bs-parent="#menu">
                          <li class="w-100">
                            <router-link to="/" class="nav-link px-0">
                              <span class="d-none d-sm-inline">Home</span>
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/table1" class="nav-link px-0">
                              <span class="d-none d-sm-inline">Table Data</span>
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/precessing" class="nav-link px-0">
                              <span class="d-none d-sm-inline">Precessing Data</span>
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/total" class="nav-link px-0">
                              <span class="d-none d-sm-inline">Analyst Data</span>
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/multiseries-chart" class="nav-link px-0">
                              <span class="d-none d-sm-inline">Multi Series Chart</span>
                            </router-link>
                          </li>
                      </ul>
                  </li>
                  <li class="divider" role="separator"></li>
                <!--Overview-->
                <li>
                      <a href="#keyfeatures" data-bs-toggle="collapse" class="nav-link align-middle collapsed" >
                          <i class="fa fa-star"  aria-hidden="true"></i>
                          <span class="d-none d-sm-inline"> TRAINING </span>
                          <i class="fa fa-chevron-up"></i>
                      </a>
                      <ul class="collapse nav flex-column submenu collapse" id="keyfeatures" data-bs-parent="#menu">
                          <li class="w-100">
                            <router-link to = '/training' class="nav-link px-0">
                              <span class="d-none d-sm-inline">Training Data</span>
                            </router-link>
                          </li>

                      </ul>
                  </li>
                  <!--Overview-->
                  <li class="divider" role="separator"></li>
                <!--Overview-->
                <li>
                      <a href="#keyfeatures" data-bs-toggle="collapse" class="nav-link align-middle collapsed" >
                          <i class="fa fa-star"  aria-hidden="true"></i>
                          <span class="d-none d-sm-inline"> PREDICTION </span>
                          <i class="fa fa-chevron-up"></i>
                      </a>
                      <ul class="collapse nav flex-column submenu collapse" id="keyfeatures" data-bs-parent="#menu">
                          <li class="w-100">
                            <router-link to = '/prediction' class="nav-link px-0">
                              <span class="d-none d-sm-inline">Prediction</span>
                            </router-link>
                          </li>

                      </ul>
                  </li>
                  <!--Overview-->
                  <li class="divider" role="separator"></li>
              </ul>
              <hr>
          </div>
      </div>
      <div class="col col-md-6 p-3 m-5">
          <div class="container">
            <router-view />
          </div>
      </div>
  </div>
</div>
</template>