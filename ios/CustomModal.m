//
//  CustomModal.m
//  unicorn
//
//  Created by Lauren Dunlap on 5/13/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "CustomModal.h"
#import <React/RCTLog.h>

@implementation CustomModal

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(logoutMsg:(NSString *)title message:(NSString *)message)
{
  
  UIAlertController* alert = [UIAlertController alertControllerWithTitle:title
                                                                 message:message
                                                          preferredStyle:UIAlertControllerStyleAlert];
  
  UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault
                                                        handler:^(UIAlertAction * action) {}];
  
  [alert addAction:defaultAction];
  //[self presentViewController:alert animated:YES completion:nil];
  UIViewController *viewController = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
  if ( viewController.presentedViewController && !viewController.presentedViewController.isBeingDismissed ) {
    viewController = viewController.presentedViewController;
  }
  
  NSLayoutConstraint *constraint = [NSLayoutConstraint
                                    constraintWithItem:alert.view
                                    attribute:NSLayoutAttributeHeight
                                    relatedBy:NSLayoutRelationLessThanOrEqual
                                    toItem:nil
                                    attribute:NSLayoutAttributeNotAnAttribute
                                    multiplier:1
                                    constant:viewController.view.frame.size.height*2.0f];
  
  [alert.view addConstraint:constraint];
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [viewController presentViewController:alert animated:YES completion:nil];
  });

}
@end
