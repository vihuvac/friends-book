//
//  CoolWebViewManager.m
//  FriendsBook
//
//  Created by Victor Valle-Castillo on 2024-06-10.
//

#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(CoolWebViewManager, RCTViewManager)
  RCT_EXPORT_VIEW_PROPERTY(htmlString, NSString)
  RCT_EXPORT_VIEW_PROPERTY(onComment, RCTDirectoEventBlock)
  RCT_EXPORT_VIEW_PROPERTY(onHighlight, RCTDirectoEventBlock)
@end
