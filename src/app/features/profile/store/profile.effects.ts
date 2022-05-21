import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { UserProfile } from "../interfaces";
import { ProfileService } from "../services/profile.service";
import { initProfile, initProfileFailure, initProfileSuccess, ProfileAction } from "./profile.actions";

@Injectable()
export class ProfileEffects {
    fetchProfileData$ = createEffect(() =>
        this.action$.pipe(
            ofType(initProfile.type),
            switchMap(() => {
                return this.profileService.getRandomUser().pipe(
                    switchMap((user: UserProfile) => {
                        const actions = []
                        actions.push(initProfileSuccess({user}))
                        return from(actions)
                    }),
                    catchError((error) => 
                        of(
                            initProfileFailure({
                                error
                            })
                        )
                    )
                )
            })
        )
    )

    constructor(
        private readonly profileService: ProfileService,
        private readonly action$: Actions<ProfileAction>
    ) {}
}