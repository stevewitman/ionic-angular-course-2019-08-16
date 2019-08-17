import { Component, OnInit } from '@angular/core';

import { Link } from './link.model';
import { LinksService } from './links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {
  links: Link[] = [];

  constructor(private linksService: LinksService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.links = this.linksService.getAllLinks();
  }

}
