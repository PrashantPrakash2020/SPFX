import * as React from 'react';
//import styles from '../components/RecruitmentApp.module.scss';
import { IRecruitmentAppProps } from './IRecruitmentAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
require('../assets/css/webpage.css');

const rightarrow: any = require('../assets/images/right-arrow.png');
const Picture1: any = require('../assets/images/Picture1.png');
const bg1: any = require('../assets/images/bg-1.jpg');
const bg2: any = require('../assets/images/bg-2.jpg');
const bg3: any = require('../assets/images/bg-3.jpg');
const Picture5 : any = require('../assets/images/Picture5.jpg');
const Picture6 : any = require('../assets/images/Picture6.jpg');
const Picture4 : any = require('../assets/images/Picture4.jpg');
const Picture3 : any = require('../assets/images/Picture3.jpg');


export default class RecruitmentApp extends React.Component < IRecruitmentAppProps, {} > {
  public render(): React.ReactElement<IRecruitmentAppProps> {
    return(
  <div className={'container-fluid'}>
    <div className={'row h-100'}>
      <div className={'col-12 col-md-5 col-side-left'}>
        <div className={'align-middle'}>
          <h1>RECRUITMENT</h1>
          <h1>PROCESS</h1>
          <h6>Work instructions, supporting documents</h6>
          <img src={rightarrow} /> </div>
      </div>
      <div className={'col-12 col-md-7 col-side-right'}>
        <div className={'container'}>
          <div className={'row pt-3 text-center text-white p-relative'}>
            <div className={'col-md-8'}>
              <div className={'row'}>
                <div className={'col-md-6 p-relative'}> <a href='#'>
                  <p className={'box-text'}>Enterprise<br/>
                    Agreeents</p>
                  <img className={'w-100'} src={Picture1} /> </a> </div>
                <div className={'col-md-6 mt-p-3 p-relative'}> <a href='#'>
                  <p className={'box-text'}>Information to<br/>
                  support<br/>
                    Hiring Leaders</p>
                  <img className={'w-100'} src={bg1}/> </a> </div>
                <div className={'col-md-6 pt-3  p-relative'}> <a href='#'>
                  <p className={'box-text'}>Advert<br/>
                    templates</p>
                  <img className={'w-100'} src={bg2}/> </a> </div>
                <div className={'col-md-6 pt-3 p-relative'}><a href='#'>
                  <p className={'box-text'}>Vendor<br/>
                    information</p>
                  <img className={'w-100'} src={Picture5}/> </a> </div>
              </div>
            </div>
            <div className={'col-md-4 mt-p-3  p-relative'}> <a href='#'>
              <p className={'box-text'}>Reporting</p>
              <img className={'w-100 '} src={Picture6}/> </a> </div>
          </div>
          
          <div className={'row pb-3 text-center text-white mob-padding'}>
            <div className={'col-md-4 pt-3 p-relative'}>
              <a href='#'>
              <p className={'box-text'}>New TA team<br/>
              member<br/>
                onboarding
              </p>
              <img className={'w-100' } src={Picture3}/>
              </a> 
              </div>
            <div className={'col-md-4 pt-3 p-relative'}> <a href='#'>
              <p className={'box-text'}>Site<br/>
                information</p>
              <img className={'w-100'} src={bg3}/> </a> </div>
            <div className={'col-md-4 pt-3 p-relative'}> <a href='#'>
              <p className={'box-text'}>SmartRecruiters<br/>
              config info<br/>
               Data migration,<br/>
                SRWorkbook</p>
              <img className={'w-100'} src={Picture4}/> </a> </div>
          </div>
        </div>
      </div>
    </div>
 </div>
		
  
    );
  }
}
