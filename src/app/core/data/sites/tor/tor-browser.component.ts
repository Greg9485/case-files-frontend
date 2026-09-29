import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';

import { FakePage } from '../../../models/fake-page';
import { FakeSite } from '../../../models/fake-site';
import { AccessService } from '../../../services/access';

@Component({
  selector: 'app-tor-browser',
  standalone: true,
  imports: [],
  templateUrl: './tor-browser.component.html',
  styleUrl: './tor-browser.component.scss'
})
export class TorBrowserComponent implements OnChanges {

  private accessService = inject(AccessService);

  @Input() page!: FakePage;
  @Input() site!: FakeSite;
  @Input() navigate!: (path: string, domain?: string) => void;

  secondHackerModalOpen = false;
  completionModalOpen = false;
  private endingSequenceStarted = false;

  get navigationItems() {
    const items = [...this.site.navigation];

    if (this.accessService.isExtractedDataUnlocked()) {
      items.push({ label: 'EXTRACTED DATA', path: '/extracted-data' });
    }

    return items;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page'] && this.page?.path === '/extracted-data/message-fragment') {
      this.startEndingSequence();
    }
  }

  navigateTo(
    path: string,
    domain?: string
  ): void {
    this.navigate(path, domain);

    if (path === '/extracted-data/message-fragment') {
      this.startEndingSequence();
    }
  }

  private startEndingSequence(): void {
    if (this.endingSequenceStarted || this.accessService.hasCompletedSprintEight()) {
      return;
    }

    this.endingSequenceStarted = true;
    setTimeout(() => {
      this.secondHackerModalOpen = true;
    }, 500);
  }

  closeSecondHackerEvent(): void {
    this.secondHackerModalOpen = false;
    this.accessService.completeSprintEight();
    this.completionModalOpen = true;
  }

  closeCompletionModal(): void {
    this.completionModalOpen = false;
  }
}
