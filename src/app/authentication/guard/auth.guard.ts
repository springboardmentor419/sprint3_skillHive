import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const routeGuard: CanActivateFn = (route, state) => {
    const auhtService=inject(AuthService);
    if (auhtService.isAuthenticated()!==null) {
        return true;
    } else {
        const router = inject(Router);
        router.navigate(['login']);
        return false;
    }
};