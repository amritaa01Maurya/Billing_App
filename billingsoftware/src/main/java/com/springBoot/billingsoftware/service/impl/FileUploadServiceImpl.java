package com.springBoot.billingsoftware.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.springBoot.billingsoftware.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class FileUploadServiceImpl implements FileUploadService {

    private final Cloudinary cloudinary;

    @Override
    public String uploadFile(MultipartFile file) {
        try {

            Map uploadResult = cloudinary.uploader().upload(
                    file.getBytes(),
                    ObjectUtils.asMap("folder", "billing-products")
            );

            return uploadResult.get("secure_url").toString();

        } catch (Exception e) {
            throw new RuntimeException("Image upload failed");
        }
    }

    @Override
    public boolean deleteFile(String imgUrl) {
        try {
            String publicId = imgUrl.substring(
                    imgUrl.lastIndexOf("/") + 1,
                    imgUrl.lastIndexOf(".")
            );
            cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
            return true;

        } catch (Exception e) {
            return false;
        }
    }
}
