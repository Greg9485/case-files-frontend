import { Injectable } from '@angular/core';
import { InvestigationEvent } from '../models/investigation-event';

@Injectable({
  providedIn: 'root'
})
export class InvestigationService {

  private events: InvestigationEvent[] = [];

  recordEvent(
    type: InvestigationEvent['type'],
    source: string,
    metadata?: Record<string, string>
  ): void {

    const event: InvestigationEvent = {
      id: crypto.randomUUID(),
      type,
      timestamp: new Date(),
      source,
      metadata
    };

    this.events.push(event);

    console.log('INVESTIGATION EVENT:', event);
  }


  getEvents(): InvestigationEvent[] {
    return this.events;
  }

}