import { Injectable } from '@angular/core';

import { Link } from './link.model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private links: Link[] = [
    {
      id: '01',
      title: 'Angular',
      url: 'https://angular.io',
      tags: ['Angular', 'docs'],
    },
    {
      id: '02',
      title: 'Ionic Framework',
      url: 'https://ionicframework.com',
      tags: ['Ionic', 'docs'],
    },
    {
      id: '03',
      title: 'Firebase',
      url: 'https://firebase.google.com',
      tags: ['Firebase', 'docs'],
    }
  ];

  constructor() { }

  getAllLinks() {
    return [...this.links];
  }

  getLink(linkId: string) {
    return {...this.links.find(l => {
      return l.id === linkId;
    })};
  }

  deleteLink(linkId: string) {
    this.links = this.links.filter(l => {
      return l.id !== linkId;
    });
  }

}
