import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'RecruitmentAppWebPartStrings';
import RecruitmentApp from './components/RecruitmentApp';
import { IRecruitmentAppProps } from './components/IRecruitmentAppProps';
import { SPComponentLoader } from '@microsoft/sp-loader';


SPComponentLoader.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css');
SPComponentLoader.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js');


export interface IRecruitmentAppWebPartProps {
  description: string;
}

export default class RecruitmentAppWebPart extends BaseClientSideWebPart<IRecruitmentAppWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRecruitmentAppProps > = React.createElement(
      RecruitmentApp,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
