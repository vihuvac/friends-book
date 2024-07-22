//
//  CoolWebViewManager.swift
//  FriendsBook
//
//  Created by Victor Valle-Castillo on 2024-06-10.
//

import Foundation

@objc(CoolWebViewManager)
class CoolWebViewManager: RCTViewManager {
  override func view() -> UIView! {
    return CoolWebView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
