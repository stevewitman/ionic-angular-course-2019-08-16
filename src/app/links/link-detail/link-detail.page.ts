import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { LinksService } from '../links.service';
import { Link } from '../link.model';

@Component({
  selector: 'app-link-detail',
  templateUrl: './link-detail.page.html',
  styleUrls: ['./link-detail.page.scss'],
})
export class LinkDetailPage implements OnInit {
  loadedLink: Link;

  constructor(
    private activatedRoute: ActivatedRoute,
    private linksService: LinksService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.router.navigate(['/links']);
        return;
      }
      const linkId = paramMap.get('id');
      this.loadedLink = this.linksService.getLink(linkId);
    });
  }

  onDeleteLink() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the link?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.linksService.deleteLink(this.loadedLink.id);
          this.router.navigate(['/links']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
